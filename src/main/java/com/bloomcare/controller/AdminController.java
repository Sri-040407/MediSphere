package com.bloomcare.controller;

import com.bloomcare.service.AppointmentService;
import com.bloomcare.service.DoctorService;
import com.bloomcare.service.PatientService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminController {
    private final PatientService patientService;
    private final DoctorService doctorService;
    private final AppointmentService appointmentService;

    public AdminController(PatientService patientService, DoctorService doctorService, AppointmentService appointmentService) {
        this.patientService = patientService;
        this.doctorService = doctorService;
        this.appointmentService = appointmentService;
    }

    @GetMapping("/admin/dashboard")
    public String dashboard(Model model) {
        model.addAttribute("totalPatients", patientService.getAllPatients().size());
        model.addAttribute("totalDoctors", doctorService.getAllDoctors().size());
        model.addAttribute("todayAppointments", appointmentService.getAllAppointments().size());
        model.addAttribute("completedAppointments", appointmentService.getAllAppointments().stream().filter(a -> "Completed".equalsIgnoreCase(a.getStatus())).count());
        model.addAttribute("pendingAppointments", appointmentService.getAllAppointments().stream().filter(a -> "Pending".equalsIgnoreCase(a.getStatus())).count());
        return "admin/dashboard";
    }
}
