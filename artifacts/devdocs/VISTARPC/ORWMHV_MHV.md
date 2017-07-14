---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWMHV MHV<br/>
# ORWMHV MHV



## Properties

Property | Value
--- | ---
Label | MHV
Routine | [ORWMHV](http://code.osehra.org/dox/Routine_ORWMHV_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN |  |  | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [MHV^ORWMHV](http://code.osehra.org/dox/Routine_ORWMHV_source.html)
Method Comment | Returns &quot;MHV&quot; if patient has My HealtheVet data
Input Parameters | ORDFN
First Comment | {::nomarkdown}<pre><code>Ouput Variable<br/> ORY = 0      if patient does not have My HealtheVet (MHV) data<br/>     = "MHV"  if patient does have My HealtheVet data   <br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,ORX<br/> S ORY=0<br/> D TFL^VAFCTFU1(.ORX,ORDFN)       ; DBIA #2990<br/> S I=0 F  S I=$O(ORX(I)) Q:'I  D<br/> .;pt has MHV treat fac (200MH) and event reason wasn't "discharge" (3):<br/> .I $P(ORX(I),U)="200MH",$P(ORX(I),U,4)'=3 D<br/> ..S $P(ORY,U)="MHV",$P(ORY,U,2)="Patient has data in My HealtheVet"<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fCover.pas">fCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}