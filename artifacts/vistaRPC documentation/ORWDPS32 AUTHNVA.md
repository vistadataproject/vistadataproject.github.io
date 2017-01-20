---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 AUTHNVA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 AUTHNVA{:/}
 tag | {::nomarkdown}AUTHNVA{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Checks restrictions for entering non-VA meds.  If no restrictions, a 0 isreturned.  If there is a restriction, it is returned in the format:1^restriction text {:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | AUTHNVA^[ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 Method comment | For Non-VA meds, check restrictions
 Input parameters | {::nomarkdown}PRV{:/}
 Code | {::nomarkdown}  N NAME,AUTH,INACT,X S VAL=0<br> I $D(^XUSEC("OREMAS",DUZ)),$$GET^XPAR("ALL","OR OREMAS NON-VA MED ORDERS")=2 Q<br> I $D(^XUSEC("OREMAS",DUZ)),'$$GET^XPAR("ALL","OR OREMAS NON-VA MED ORDERS") D  Q<br> . S VAL="1^OREMAS key holders may not enter non-VA medication orders."<br> S NAME=$P($G(^VA(200,PRV,20)),U,2) S:'$L(NAME) NAME=$P(^(0),U)<br> S X=$G(^VA(200,PRV,"PS")),AUTH=$P(X,U),INACT=$P(X,U,4)<br> I 'AUTH!(INACT&(DT>INACT)) D  Q<br> . S VAL="1^"_NAME_" is not authorized to write medication orders."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fODMedNVA.pas">Orders/fODMedNVA.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}