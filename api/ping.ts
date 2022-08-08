import { VercelRequest, VercelResponse } from "@vercel/node";

const ping = async (
  _req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  res.status(200).json("alive");
};

export default ping;
