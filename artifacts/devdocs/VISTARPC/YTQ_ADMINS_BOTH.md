---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; YTQ ADMINS BOTH<br/>
# YTQ ADMINS BOTH

 Returns all testing administrations for a specified patient.Returns data from 601.84, 601.2 and 601.4. This is new and legacy data.  input : DFN        COMPLETE: Y for all completed admins, N for all incompletes                   (Reqiured) output: Administration ID D^Instrument Name^Date Given^Date Saved        ^Orderer^Admin.By^Signed^# Answers^R_Privl        ^Is Legacy^INSTRUMENT id 601.71^Test IENS 601^Is copyright        ^Location IENS         This does NOT return ASI or GAF data.

## Properties

Property | Value
--- | ---
Label | ADMINS
MUMPS Implementation | [YTQAPI5](http://code.osehra.org/dox/Routine_YTQAPI5_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}