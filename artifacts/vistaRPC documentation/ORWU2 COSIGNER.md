---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU2 COSIGNER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU2 COSIGNER{:/}
 tag | {::nomarkdown}COSIGNER{:/}
 routine | [ORWU2](http://code.osehra.org/dox/Routine_ORWU2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a set of New Person file entries for use in a long list box.The set is limited to USR PROVIDERS who do not require cosignature.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Fileman date that the user will be required to be active on. (optional){:/} | 
| {::nomarkdown}ORDIR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Direction to move through the #200 x-ref with $O.{:/} | 
| {::nomarkdown}ORFROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Starting name for this set.{:/} | 
| {::nomarkdown}ORTIUTYP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}is + of the 0 node of the 8925 docmt{:/} | 
| {::nomarkdown}ORTIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record # of the TIU Document in file 8925.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | COSIGNER^[ORWU2](http://code.osehra.org/dox/Routine_ORWU2_source.html)
 Input parameters | {::nomarkdown}ORFROM, ORDIR, ORDATE, ORTIUTYP, ORTIUDA{:/}
 First comment | {::nomarkdown}<pre> (Set up for the DC Summary)<br/>  (to use TIU doc requirments and USR PROVIDER)<br/><br/> PARAMS from ORWU2 COSIGNER RPC call:<br/>  .ORY=returned list.<br/>  ORFROM=Starting name for this set.  <br/>  ORDIR=Direction to move through the x-ref with $O.  <br/>  ORDATE=Checks for an USR PROVIDER on this date (optional).<br/>  ORTIUTYP is + of the 0 node of the 8925 docmt.  <br/>  ORTIUDA is the docmt IEN,<br/>  <br/>  <br/>  </pre>{:/}
 Code | {::nomarkdown}  N ORDD,ORDIV,ORDUP,ORGOOD,ORI,ORIEN1,ORIEN2,ORLAST,ORMAX,ORMRK,ORMULTI,ORPREV,ORSRV,ORTTL,ORERR<br> S ORI=0,ORMAX=44,(ORLAST,ORPREV)="",ORDATE=$G(ORDATE) ;ORKEY=$G(ORKEY)<br> I +$G(ORTIUDA) S ORTIUTYP=+$G(^TIU(8925,+$G(ORTIUDA),0))<br> S ORMULTI=$$ALL^VASITE ; IA# 10112.  Do once at beginning of call.<br> F  Q:ORI'<ORMAX  S ORFROM=$O(^VA(200,"AUSER",ORFROM),ORDIR) Q:ORFROM=""  D<br> .S ORIEN1=""<br> .F  S ORIEN1=$O(^VA(200,"AUSER",ORFROM,ORIEN1),ORDIR) Q:'ORIEN1  D<br> ..;<br> ..I '$$PROVIDER^XUSER(ORIEN1,1) Q   ; Terminated? <br> ..I '$$ISA^USRLM(+ORIEN1,"PROVIDER",.ORERR,ORDATE) Q  ;(USR PROVIDER CLASS CHECK?){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}