export default async function handler(req, res) {
  const response = await fetch("https://catalog.uoregon.edu/calendar/");
  const html = await response.text();

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(html);
}
