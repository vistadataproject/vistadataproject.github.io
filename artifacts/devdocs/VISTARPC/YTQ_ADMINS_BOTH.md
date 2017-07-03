---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTQ ADMINS BOTH
# YTQ ADMINS BOTH

 Returns all testing administrations for a specified patient.Returns data from 601.84, 601.2 and 601.4. This is new and legacy data.  input : DFN        COMPLETE: Y for all completed admins, N for all incompletes                   (Reqiured) output: Administration ID D^Instrument Name^Date Given^Date Saved        ^Orderer^Admin.By^Signed^# Answers^R_Privl        ^Is Legacy^INSTRUMENT id 601.71^Test IENS 601^Is copyright        ^Location IENS         This does NOT return ASI or GAF data.

Property | Value
--- | ---
Label | ADMINS
Routine | [YTQAPI5](http://code.osehra.org/dox/Routine_YTQAPI5_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}