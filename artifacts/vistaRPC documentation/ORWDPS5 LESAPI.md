---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS5 LESAPI 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS5 LESAPI{:/}
 tag | {::nomarkdown}LESAPI{:/}
 routine | [ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Call LES Api from inside CPRS for validating changed lab order
 Input Parameters | {::nomarkdown}FLDS{:/}
 Lines | {::nomarkdown} N DFNL,TESTL,ORLOCL,ORNPL,ORDTL,HAVELES<br/> S (DFNL,TESTL,ORLOCL,ORNPL,ORDTL,HAVELES)=""<br/> S DFNL=$P(FLDS,U,1)<br/> S TESTL=$P(FLDS,U,2)<br/> S ORLOCL=$P(FLDS,U,3)<br/> S ORNPL=$P(FLDS,U,4)<br/> S ORDTL=$P(FLDS,U,5)<br/> S HAVELES=$TEXT(COM^AVJLES)<br/> I $L(HAVELES) D COM^AVJLES(.ORY,DFNL,TESTL,ORLOCL,ORNPL,ORDTL)<br/> S ORY(1)=""{:/}
 Leading comment lines | {::nomarkdown}FLDS = DFN^TEST^ORL^ORNP^ORDT<br/>DFN:  Patient DFN (pointer to #2)<br/>TEST: Lab Test IFN (pointer to #101.43)<br/>ORL:  Patient Location (pointer to #44)<br/>ORNP: Provider IEN (pointer to #200)<br/>ORDT: Collection date/time (fileman format){:/}




 Generated on January 13th 2017, 7:15:28 am