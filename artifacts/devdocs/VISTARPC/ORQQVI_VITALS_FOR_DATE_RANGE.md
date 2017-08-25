---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVI VITALS FOR DATE RANGE<br/>
# ORQQVI VITALS FOR DATE RANGE

Function returns a patient's vital measurements between start date and stop date.

## Properties

Property | Value
--- | ---
Label | VITALS
MUMPS Implementation | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient id (DFN) from Patient File (#2).
START DATE/TIME | LITERAL | 16 |  | Start date/time for vital retrieval in Fileman format.
STOP DATE/TIME | LITERAL | 16 |  | Stop date/time for vital retrieval in Fileman format.



## MUMPS Method Description

Property | Value
--- | ---
Method | [VITALS^ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
Method Comment | return patient&#x27;s vital measurements taken between start date/time and end date/time
Input Parameters | DFN, ORSDT, OREDT
First Comment | {::nomarkdown}<pre><code>ORY: return variable, results are returned in the format:<br/>     vital measurement ien^vital type^date/time taken^rate<br/>DFN: patient identifier from Patient File [#2]<br/>ORSDT: start date/time in Fileman format<br/>OREDT: end date/time in Fileman format<br/>DBIA for PXRMINDX(120.5 is 4290<br/>DBIA for ^GMVPXRM is 3647<br/>DBIA for ^GMRVUT0 is 1446</code></pre>{:/}
Code | {::nomarkdown}<pre><code> K ^UTILITY($J,"GMRVD")<br/> S GMRVSTR="BP;HT;WT;T;R;P;PN" ;dee 2/12/99 added PN<br/> S GMRVSTR(0)=ORSDT_"^"_OREDT_"^"_"^"<br/> D EN1^GMRVUT0<br/> N ORT,ORD,ORI,I<br/> S ORT="",ORD=0,ORI=0,I=0<br/> F  S ORT=$O(^UTILITY($J,"GMRVD",ORT)) Q:ORT=""  D<br/> .F  S ORD=$O(^UTILITY($J,"GMRVD",ORT,ORD)) Q:ORD<1  D<br/> ..F  S ORI=$O(^UTILITY($J,"GMRVD",ORT,ORD,ORI)) Q:ORI<1  D<br/> ...S I=I+1<br/> ...S ORY(I)=ORI_"^"_ORT_"^"_$P(^UTILITY($J,"GMRVD",ORT,ORD,ORI),"^",8)_"^"_$P(^(ORI),"^")<br/> I I=0 S ORY(1)="^No vitals found."<br/> K GMRVSTR</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}