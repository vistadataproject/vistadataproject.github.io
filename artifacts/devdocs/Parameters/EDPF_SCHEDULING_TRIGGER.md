---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; EDPF SCHEDULING TRIGGER<br/>
# EDPF SCHEDULING TRIGGER

This allows a site to select which scheduling event should trigger an automatic addition of the patient to the board.   1: Patient will be added to the board when an appointment is made  4: Patient will be added to the board when checked-in

## Properties

Property | Value
--- | ---
Summary | Scheduling Trigger for EDIS
Value Type | set of codes
Value Domain | 1:Make Appointment;4:Check-in
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
3 | DIVISION
5 | SYSTEM
10 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}