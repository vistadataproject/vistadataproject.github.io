---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORAM APPT MATCH LOOK-AHEAD
# ORAM APPT MATCH LOOK-AHEAD

This is the whole number of days to look-ahead (into the future) whenattempting to match the Anticoagulation Encounter to a scheduledappointment in the VistA Scheduling Package. Please enter a number between 0 and 3, no decimal digits. The default will be one (1) day (i.e., tomorrow). A value of zero (0) willrestrict the search to end with today&#x27;s appointments (i.e., T@23:59).

Property | Value
--- | ---
ID | 605
Summary | Look-ahead Days for Appointment Matching
Value Type | numeric
Value Domain | 0:3
Multiple Instances | false

### Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | DIVISION

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}