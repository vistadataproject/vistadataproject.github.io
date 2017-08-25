---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORAM APPT MATCH LOOK-BACK<br/>
# ORAM APPT MATCH LOOK-BACK

This is the whole number of days to look-back when attempting to match theAnticoagulation Encounter to a scheduled appointment in the VistA Scheduling Package. Please enter a number between 0 and 7, no decimal digits. The default will be one (1) day (i.e., yesterday). A value of zero (0)will restrict the search to begin with today&#x27;s appointments (i.e.,T@00:00).

## Properties

Property | Value
--- | ---
Summary | Look-back Days for Appointment Matching
Value Type | numeric
Value Domain | 0:7
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | LOCATION
2 | DIVISION

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}