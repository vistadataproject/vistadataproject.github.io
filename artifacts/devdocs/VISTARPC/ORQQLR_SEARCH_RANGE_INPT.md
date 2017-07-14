---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQLR SEARCH RANGE INPT<br/>
# ORQQLR SEARCH RANGE INPT

Returns the date search range in number of days (e.g. 2) to begin the search before today. For example, a value of 2 would indicate to limit thesearch between two days and today. Limited to inpatients.

## Properties

Property | Value
--- | ---
Label | SRIN
Routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 32 | true | Identifier from Patient file [#2].



## MUMPS Method Description

Property | Value
--- | ---
Method | [SRIN^ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
Method Comment | return lab results search date range for an inpatient
Input Parameters | ORPT
Code | {::nomarkdown}<pre><code> N DIFF,SDT,EDT,ORSRV,ORLOC<br/> I +$G(ORPT)>0 D<br/> .N DFN S DFN=ORPT,VA200="" D OERR^VADPT<br/> .I +$G(VAIN(4))>0 S ORLOC=+$G(^DIC(42,+$G(VAIN(4)),44))<br/> .K VA200,VAIN<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br/> S DIFF=$$GET^XPAR("USR^LOC.`"_$G(ORLOC)_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQLR SEARCH RANGE INPT",1,"E")<br/> S:+$G(DIFF)<1 DIFF=2  ;if no default defined use 2 days<br/> S ORY=DIFF<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}