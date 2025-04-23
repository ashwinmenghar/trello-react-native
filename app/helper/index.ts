export const getErrorMessage = (err: any) => {
  if (!err) return "Unknown error";
  if (typeof err === "string") return err;
  if ("error" in err && typeof err.error === "string") return err.error;
  if ("data" in err && typeof err.data === "string") return err.data;
  return "Unexpected error occurred";
};
