---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; DENTV TP NOTE OBJECTS<br/>
# DENTV TP NOTE OBJECTS

These parameters determine how the user wants to configure the data objects in the progress note. 0&#x3D;No, 1&#x3D;Yes.  The default System instance/values are:CODE BOILERPLATE     0;0;0;0COMPLETED ITEMS      1;0;0;1DENTAL ALERTS        0;0;0;0DIAGNOSTIC FINDINGS  1;0;1;0HEADNECK FINDINGS    1;0;1;1NEXT APPOINTMENT     1;0;0;0NOTE BOILERPLATE     1;0;0;0PERIODONTAL EXAM     1;0;0;0PLANNED ITEMS        1;0;1;0PSR EXAM             1;0;1;0TEXT MARKER          1;0;0;0TOOTH NOTES          1;0;1;1 Position 1 is whether to include the instance type in the Note,Position 2 is whether to include Added items of that typePosition 3 is whether to include Modified items of that typePosition 4 is whether to include Deleted items of that type

## Properties

Property | Value
--- | ---
Summary | DRM TREATMENT SYSTEM NOTE DATA OBJECTS
Value Type | free text
Value Domain | 0-1
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
5 | PACKAGE
10 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}