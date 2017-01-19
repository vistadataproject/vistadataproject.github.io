---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ FS CHNGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ FS CHNGE{:/}
 tag | {::nomarkdown}CHGSERV{:/}
 routine | [MAGQBUT](http://code.osehra.org/dox/Routine_MAGQBUT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Finds the available network file server with the most space, changes the current write space pointer and returns the IEN.The candidate list requires the following criteria:ONLINEtype: MAGpath does not contain: \:\NON-ROUTER{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}null{:/} |  |  |  | {::nomarkdown}No input parameter required.{:/} | 
| {::nomarkdown}NOTIFY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A message will be sent to the G.MAG_SERVER mail group if this value is set to '1' and if the share space does not meet the lower limit as establishedby the PERCENT SERVER RESERVE (#11) in the SITE PARAMETER FILE (#2006.1).{:/} | 
| {::nomarkdown}BP OS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Microsoft Windows operating system name and version.{:/} | 
| {::nomarkdown}BPWS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Background Processor network computer name.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}