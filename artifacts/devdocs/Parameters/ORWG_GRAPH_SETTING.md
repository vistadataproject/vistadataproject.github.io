---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORWG GRAPH SETTING<br/>
# ORWG GRAPH SETTING

Used as preference of graph default styles and sources.Deletion of this value at the Package level will disable graphing.User settings and public default should use the Graph Settings dialog tochange these values. The structure of this parameter is a  /  delimited string where the pieces are:1 - file listing delimited by  ; 2 - options where the corresponding letter activates that feature3 - sort column number (used internally)4 - max graphs5 - min graph height6 - (not used)7 - max selection8 - max selection limit (may be set to at system level to limit     number of items that users may select for graphing   default is 1000) Files:Admissions - 405, Allergies - 120.8, Anatomic  Pathology - 63AP,Blood Bank - 63BB, Exams - 9000010.13, Health Factors - 9000010.23,Immunizations - 9000010.11, Lab Tests - 63, Medication, BCMA - 53.79,Medication, Inpatient - 55, Medication, Non-VA - 55NVA, Medication, Outpatient - 52, Medicine - 690, Mental Health - 601.2,Microbiology - 63MI, Notes - 8925, Orders - 100,Patient Education - 9000010.16, Problems - 9000011, Procedures - 9000010.18,Purpose of Visit - 9000010.07, Radiology Exams - 70, Registration, DX - 45DX,Registration, OP/Proc - 45OP, Skin Tests - 9000010.12, Surgery - 130,Treatments - 9000010.15, Visits - 9000010, Vitals - 120.5Also (for grouping):Drug Class - 50.605, Reminder Taxonomy - 811.2 Options: A - 3D, B - Clear Background, C - Dates, D - Gradient, E - Hints, F - Legend, G - Lines, H - Sort by Type, I - Stay on Top, J - Values,K - Zoom, Horizontal, L - Zoom, Vertical , M - Fixed Date Range

## Properties

Property | Value
--- | ---
Summary | CPRS Graph Settings
Value Type | free text
Value Domain | 
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
8 | SYSTEM
9 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}