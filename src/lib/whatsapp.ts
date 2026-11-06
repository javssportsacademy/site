import { TrialBookingPayload } from "@/types";

export const WHATSAPP_PRIMARY_NUMBER = "919500161690";
export const WHATSAPP_SECONDARY_NUMBER = "917339111690";
export const PRIMARY_PHONE_DISPLAY = "+91 95001 61690";
export const SECONDARY_PHONE_DISPLAY = "+91 73391 11690";
export const PRIMARY_EMAIL = "javssportsacademy@gmail.com";
export const INSTAGRAM_HANDLE = "@javssportsacademy";
export const YOUTUBE_HANDLE = "@JavsInbox";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@JavsInbox";

export function createWhatsAppUrl(message: string, phoneNumber: string = WHATSAPP_PRIMARY_NUMBER): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}

export function getQuickChatWhatsAppUrl(): string {
  return createWhatsAppUrl("Hi Coach Mohammed Javeed, I would like to enquire about sports training at JAV'S Sports Academy.");
}

export function getTrialBookingWhatsAppUrl(payload: Partial<TrialBookingPayload>): string {
  const sport = payload.sport || "General Sports Assessment";
  const age = payload.ageBracket || "Not specified";
  const location = payload.location || "Nearest Center";
  const name = payload.name ? `\n- Name: ${payload.name}` : "";
  const phone = payload.phone ? `\n- Phone: ${payload.phone}` : "";
  const notes = payload.message ? `\n- Notes: ${payload.message}` : "";

  const text = `🏆 *JAV'S SPORTS ACADEMY — Programme Assessment Enquiry*
${name}${phone}
- Sport: ${sport}
- Age Category: ${age}
- Preferred Location: ${location}${notes}

Please confirm batch schedule and assessment slot details. Thank you!`;

  return createWhatsAppUrl(text);
}

export function getGeneralEnquiryWhatsAppUrl(context: string = "General"): string {
  const text = `Hello JAV'S Sports Academy team! I am reaching out regarding *${context}*. Could you please share schedule details and fee structure?`;
  return createWhatsAppUrl(text);
}

export function getPartnershipWhatsAppUrl(type: string, orgName?: string): string {
  const org = orgName ? ` from ${orgName}` : "";
  const text = `Hi Coach Mohammed Javeed, I would like to discuss a *${type} Sports Partnership* with JAV'S Sports Academy${org}. Please let me know when we can connect.`;
  return createWhatsAppUrl(text);
}
