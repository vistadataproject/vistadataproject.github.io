---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; EDPF SCHEDULING TRIGGER
# EDPF SCHEDULING TRIGGER

This allows a site to select which scheduling event should trigger an automatic addition of the patient to the board.   1: Patient will be added to the board when an appointment is made  4: Patient will be added to the board when checked-in

Property | Value
--- | ---
ID | 621
Summary | Scheduling Trigger for EDIS
Value Type | set of codes
Value Domain | 1:Make Appointment;4:Check-in
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
3 | DIVISION
5 | SYSTEM
10 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}