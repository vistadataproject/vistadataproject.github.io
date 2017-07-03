---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQPT WARD PATIENTS
# ORQPT WARD PATIENTS

Function returns a list of patients on a ward.

Property | Value
--- | ---
Label | WARDPTS
Routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
WARD ID | LITERAL | 16 | true | The record number of the ward from the Ward Location File (#42).



### MUMPS Method Description

Property | Value
--- | ---
Method | [WARDPTS^ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
Method Comment | RETURN LIST OF PATIENTS IN A WARD
Input Parameters | WARD
First Comment | {::nomarkdown}<pre><code> SLC/PKS - Modifications for Room/Bed data on  1/19/2001.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> I +$G(WARD)<1 S Y(1)="^No ward identified" Q <br/> N ORI,DFN,RBDAT<br/> S ORI=1,DFN=0<br/> S WARD=$P(^DIC(42,WARD,0),"^")   ;GET WARD NAME FOR "CN"  LOOKUP<br/> F  D  Q:DFN'>0<br/> .S DFN=$O(^DPT("CN",WARD,DFN)) Q:DFN'>0<br/> .S Y(ORI)=+DFN_"^"_$P(^DPT(+DFN,0),"^")<br/> .S RBDAT=""<br/> .; Add patient room/bed information where data exists:<br/> .S RBDAT=$P($G(^DPT(+DFN,.101)),U)<br/> .I RBDAT'="" D                                   ; Any R/B data?<br/> ..I $L(RBDAT)<4 S RBDAT=RBDAT_"   "              ; Add if < 4 chars.<br/> ..S RBDAT=$E(RBDAT,1,4)                          ; Get first 4 only.<br/> .S Y(ORI)=Y(ORI)_U_RBDAT                         ; Add R/B to string<br/> .S ORI=ORI+1                                     ; Increment counter.<br/> S:+$G(Y(1))<1 Y(1)="^No patients found."</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}