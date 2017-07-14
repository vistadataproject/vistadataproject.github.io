---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQLR SEARCH RANGE OUTPT<br/>
# ORQQLR SEARCH RANGE OUTPT

Returns the date search range in number of days (e.g. 90) to begin the search before today.  For example, a value of 90 would indicate to limit thesearch between ninety day. Limited to Outpatients.

## Properties

Property | Value
--- | ---
Label | SROUT
Routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SROUT^ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
Method Comment | return lab results search date range for an outpatient
Code | {::nomarkdown}<pre><code> N DIFF,SDT,EDT,ORSRV<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br/> S DIFF=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQLR SEARCH RANGE OUTPT",1,"E")<br/> S:+$G(DIFF)<1 DIFF=14  ;if no default defined use 14 days<br/> S ORY=DIFF</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}