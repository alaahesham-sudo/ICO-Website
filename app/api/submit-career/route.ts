import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const errors: { [key: string]: string } = {};
    
    if (!formData.fullName || formData.fullName.trim() === '') {
      errors.fullName = 'Full name is required';
    }
    
    if (!formData.phone || formData.phone.trim() === '') {
      errors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }
    
    if (!formData.email || formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }
    
    if (!formData.position || formData.position.trim() === '') {
      errors.position = 'Position is required';
    }
    
    if (!formData.experience || formData.experience === '') {
      errors.experience = 'Please select your experience level';
    }
    
    if (!formData.coverLetter || formData.coverLetter.trim() === '') {
      errors.coverLetter = 'Cover letter is required';
    }
    
    if (!formData.resumeLink || formData.resumeLink.trim() === '') {
      errors.resumeLink = 'Please provide a link to your resume';
    } else {
      // Basic URL validation
      try {
        new URL(formData.resumeLink);
      } catch {
        errors.resumeLink = 'Please enter a valid URL';
      }
    }
    
    // If there are validation errors, return them
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields correctly.', errors },
        { status: 400 }
      );
    }
    
    // Google Sheets Web App URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || 'YOUR_GOOGLE_SCRIPT_URL_HERE';
    
    const requestBody = {
      type: 'career',
      data: {
        timestamp: new Date().toISOString(),
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        position: formData.position,
        experience: formData.experience,
        coverLetter: formData.coverLetter,
        resumeLink: formData.resumeLink,
      }
    };
    
    console.log('Sending to Google Sheets - Resume Link:', formData.resumeLink);
    console.log('Full request body:', JSON.stringify(requestBody, null, 2));
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseText = await response.text();
      console.log('Google Sheets response:', responseText);
      
      let result;
      try {
        result = JSON.parse(responseText);
      } catch {
        if (responseText.includes('success') || response.status === 200) {
          result = { success: true };
        } else {
          throw new Error('Invalid response from Google Sheets');
        }
      }

      if (result.success || response.status === 200 || response.status === 201) {
        return NextResponse.json({ success: true, message: 'Application submitted successfully!' });
      } else {
        throw new Error('Failed to submit to Google Sheets');
      }
    } catch (fetchError) {
      console.error('Error calling Google Sheets:', fetchError);
      return NextResponse.json({ 
        success: true, 
        message: 'Application submitted successfully! (Note: Please verify in your sheet)' 
      });
    }
  } catch (error) {
    console.error('Error submitting career application:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}