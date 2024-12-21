import supabase from "./supabase";

export async function getPatients() {
  const { data, error } = await supabase.from("patient").select("*");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching patients");
  }

  return data;
}

export async function getAppointments() {
  const { data, error } = await supabase.from("appointment").select("*");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching patients");
  }

  return data;
}

export async function getDoctors() {
  const { data, error } = await supabase.from("doctor").select("*");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching patients");
  }

  return data;
}

export async function createAppointment(appointmentData) {
  const { patientid, doctorid, appointmentdate, appointmenttime, status } =
    appointmentData;

  const { data, error } = await supabase.from("appointment").insert([
    {
      patientid,
      doctorid,
      appointmentdate,
      appointmenttime,
      status,
    },
  ]);

  if (error) {
    console.error(error);
    throw new Error("An error occurred while creating the appointment");
  }

  return data;
}

export async function getBills() {
  const { data, error } = await supabase.from("bill").select("*");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching patients");
  }

  return data;
}
