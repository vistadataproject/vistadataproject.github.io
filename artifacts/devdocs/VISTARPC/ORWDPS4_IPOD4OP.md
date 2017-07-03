---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS4 IPOD4OP
# ORWDPS4 IPOD4OP



Property | Value
--- | ---
Label | IPOD4OP
Routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [IPOD4OP^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Method Comment | True: is an Inpt (IV OI) order on an OutPatient
Input Parameters | ORID
Code | {::nomarkdown}<pre><code> Q:'$D(^OR(100,+ORID,0))<br/> S ORY=0<br/> N APKG,ADLG,ADG,APTCLS,RXDG,UDDLG,IPPKG<br/> S (RXDG,UDDLG,IPPKG)=0<br/> S RXDG=+$O(^ORD(100.98,"B","O RX",0))<br/> S UDDLG=+$O(^ORD(101.41,"B","PSJ OR PAT OE",0))<br/> S IPPKG=+$O(^DIC(9.4,"B","INPATIENT MEDICATIONS",0))<br/> S ADLG=+$P($G(^OR(100,+ORID,0)),U,5)<br/> S ADG=$P($G(^OR(100,+ORID,0)),U,11)<br/> S APKG=$P($G(^OR(100,+ORID,0)),U,14)<br/> S APTCLS=$P($G(^OR(100,+ORID,0)),U,12)<br/> I ADG=RXDG,(ADLG=UDDLG),(APKG=IPPKG),(APTCLS="I") S ORY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}