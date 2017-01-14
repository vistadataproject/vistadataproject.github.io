---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ACKQROES 

 property | value 
--- | --- 
 label | {::nomarkdown}ACKQROES{:/}
 tag | {::nomarkdown}START{:/}
 routine | [ACKQAG03](http://code.osehra.org/dox/Routine_ACKQAG03_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is the RPC used to setup and send to the DDC, thesigned audiometric data file entry to the DDC from the application Audiogram Enter/Edit (AKCQROES3E.EXE). It is triggered bythe saving of a signed entry in 509850.9.  The RPC calls routine START^ACKQAG03 which in turn calls EN^ACKQAG04. The VADPT utilities are also used.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient file.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the entry in 509850.9 that the user is working on.{:/} | 
| {::nomarkdown}STANUM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Sta # of the sending clinic{:/} | 
| {::nomarkdown}USRNAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the submitting user{:/} | 
| {::nomarkdown}USRSER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the submitting user's service{:/} | 




 Generated on January 13th 2017, 7:15:28 am