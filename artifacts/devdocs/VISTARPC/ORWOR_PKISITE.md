---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWOR PKISITE<br/>
# ORWOR PKISITE



## Properties

Property | Value
--- | ---
Label | PKISITE
MUMPS Implementation | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PKISITE^ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
Method Comment | RPC determines if PKI is turned on at the site
Code | {::nomarkdown}<pre><code> N ORPKIS,ORSITE,IEN<br/> S RETURN=0<br/> Q:'$L($T(STORESIG^XUSSPKI))  ;Check for Kernel piece<br/> Q:'$L($T(OIDEA^PSSOPKI))  ;Check for Pharmacy piece<br/> S ORPKIS=0,ORSITE=+$$SITE^VASITE() I $D(^ORD(100.7,"B",ORSITE)) D<br/> . S IEN=$O(^ORD(100.7,"B",ORSITE,"")),ORPKIS=$P(^ORD(100.7,IEN,0),"^",2)<br/> I ORPKIS S RETURN=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}