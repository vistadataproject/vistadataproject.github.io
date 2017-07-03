---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS32 AUTHNVA
# ORWDPS32 AUTHNVA

Checks restrictions for entering non-VA meds.  If no restrictions, a 0 isreturned.  If there is a restriction, it is returned in the format:1^restriction text 

Property | Value
--- | ---
Label | AUTHNVA
Routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [AUTHNVA^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Method Comment | For Non-VA meds, check restrictions
Input Parameters | PRV
Code | {::nomarkdown}<pre><code> N NAME,AUTH,INACT,X S VAL=0<br/> I $D(^XUSEC("OREMAS",DUZ)),$$GET^XPAR("ALL","OR OREMAS NON-VA MED ORDERS")=2 Q<br/> I $D(^XUSEC("OREMAS",DUZ)),'$$GET^XPAR("ALL","OR OREMAS NON-VA MED ORDERS") D  Q<br/> . S VAL="1^OREMAS key holders may not enter non-VA medication orders."<br/> S NAME=$P($G(^VA(200,PRV,20)),U,2) S:'$L(NAME) NAME=$P(^(0),U)<br/> S X=$G(^VA(200,PRV,"PS")),AUTH=$P(X,U),INACT=$P(X,U,4)<br/> I 'AUTH!(INACT&(DT>INACT)) D  Q<br/> . S VAL="1^"_NAME_" is not authorized to write medication orders."</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fODMedNVA.pas">Orders/fODMedNVA.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}