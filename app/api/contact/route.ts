import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, budget, message } = data || {};
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }

    // Simulate processing: write to console (replace with your CRM/email)
    console.log('[Intelliwave contact]', { name, email, company, budget, message, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }
}
