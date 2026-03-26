import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // The Google Apps Script Web App URL from environment variables
    const googleSheetURL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!googleSheetURL) {
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not set. Simulating form submission.');
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return NextResponse.json({ success: true, message: 'Simulated success (no webhook URL)' });
    }

    const response = await fetch(googleSheetURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const resultText = await response.text();
    console.log("Google Sheets response status:", response.status);
    console.log("Google Sheets response body:", resultText);

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'Successfully submitted form.' });
    } else {
      console.error('Google Sheets error:', response.statusText);
      return NextResponse.json(
        { success: false, message: 'Failed to submit form to Google Sheets.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
