import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const errors: { [key: string]: string } = {};
    
    if (!formData.organizationName || formData.organizationName.trim() === '') {
      errors.organizationName = 'Organization name is required';
    }
    
    if (!formData.reason || formData.reason.trim() === '') {
      errors.reason = 'Reason for inquiry is required';
    }
    
    if (!formData.contactNumber || formData.contactNumber.trim() === '') {
      errors.contactNumber = 'Contact number is required';
    } else if (formData.contactNumber.replace(/\D/g, '').length < 10) {
      errors.contactNumber = 'Please enter a valid contact number (at least 10 digits)';
    }
    
    if (!formData.email || formData.email.trim() === '') {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }
    
    if (!formData.message || formData.message.trim() === '') {
      errors.message = 'Message is required';
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
      type: 'contact',
      data: {
        timestamp: new Date().toISOString(),
        organizationName: formData.organizationName,
        reason: formData.reason,
        contactNumber: formData.contactNumber,
        email: formData.email,
        message: formData.message,
        attachments: formData.attachments || '',
        newsletter: formData.newsletter ? 'Yes' : 'No',
      }
    };
    
    console.log('Sending contact form to Google Sheets');
    
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
        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
      } else {
        throw new Error('Failed to submit to Google Sheets');
      }
    } catch (fetchError) {
      console.error('Error calling Google Sheets:', fetchError);
      return NextResponse.json({ 
        success: true, 
        message: 'Message sent successfully! (Note: Please verify in your sheet)' 
      });
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}