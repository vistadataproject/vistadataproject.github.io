---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ ADMINS BOTH 

 property | value 
--- | --- 
 label | YTQ ADMINS BOTH
 tag | ADMINS
 routine | [YTQAPI5](http://code.osehra.org/dox/Routine_YTQAPI5_source.html)
 return value type | ARRAY
 description |  Returns all testing administrations for a specified patient.Returns data from 601.84, 601.2 and 601.4. This is new and legacy data.  input : DFN        COMPLETE: Y for all completed admins, N for all incompletes                   (Reqiured) output: Administration ID D^Instrument Name^Date Given^Date Saved        ^Orderer^Admin.By^Signed^# Answers^R_Privl        ^Is Legacy^INSTRUMENT id 601.71^Test IENS 601^Is copyright        ^Location IENS         This does NOT return ASI or GAF data.




 ###### Generated on January 11th 2017, 6:39:43 am