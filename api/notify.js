export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const booking = req.body;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "AnthimYatra <onboarding@resend.dev>",
      to: "ranga.siddu@gmail.com",
      subject: "New AnthimYatra Booking Request",
      html: `
        <h2>New Booking Request</h2>
        <p><b>Name:</b> ${booking.full_name}</p>
        <p><b>Phone:</b> ${booking.phone}</p>
        <p><b>Address:</b> ${booking.address}</p>
        <p><b>City/Town/Village:</b> ${booking.city_town_village}</p>
        <p><b>Postal Code:</b> ${booking.postal_code}</p>
        <p><b>District:</b> ${booking.district}</p>
        <p><b>State:</b> ${booking.state}</p>
        <p><b>Faith:</b> ${booking.faith}</p>
        <p><b>Service:</b> ${booking.service_type}</p>
        <p><b>Message:</b> ${booking.message}</p>
      `,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return res.status(500).json(data);
  }

  return res.status(200).json(data);
}