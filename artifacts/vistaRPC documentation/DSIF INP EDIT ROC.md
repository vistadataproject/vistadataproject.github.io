---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP EDIT ROC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP EDIT ROC{:/}
 tag | {::nomarkdown}ROCEDIT{:/}
 routine | [DSIFINP1](http://code.osehra.org/dox/Routine_DSIFINP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC duplicates the logic of the FBCH EDIT ROC input template.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number of Contact/Fee Notification (Required - Pointer to file 162.2/161.5){:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA(n)=\Field^Value\File 161.5 MUST match #162.2 5       TYPE OF CONTACT: telephone// 6.5     PHONE # OF PERSON CONTACTED: 7       STREET ADDRESS[1] OF CONTACT: 8       STREET ADDRESS[2] OF CONTACT: 9       CITY OF CONTACT: 10      STATE OF CONTACT: 11      ZIP CODE OF CONTACT: 12      ATTENDING PHYSICIAN: GONE// 13      ATTEND.PHYSICIAN TELEPHONE NO.: 16      MODE OF TRANSPORTATION: AMBULANCE//   (Ien of file #392.4)16.5    VETERAN HAVE OTHER INSURANCE: NO// 17      Select DATE/TIME OF CONTACT: JAN 30,1994@13:39// 18      APPROVING OFFICIAL:   (if present ien of file #200)NARR    narrative fields, which must be preceded by line number piece        ex) NARR^1^THIS IS LINE 1            NARR^2^THIS IS LINE 2 (all are option, but some must exist){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}