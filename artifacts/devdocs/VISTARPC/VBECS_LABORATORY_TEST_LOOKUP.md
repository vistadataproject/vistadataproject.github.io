---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VBECS LABORATORY TEST LOOKUP
# VBECS LABORATORY TEST LOOKUP

This RPC returns XML containing a list of Laboratory tests from the LABORATORY TEST file (#60). XML Mapping:Name element =          LABORATORY TEST file (#60) / NAME field (#.01)IEN element =           LABORATORY TEST file (#60) / NUMBER field (#.001)Specimen element =      LABORATORY TEST file (#60) / SITE/SPECIMEN                         sub-file (#60.01) / SITE/SPECIMEN field (#.01)                        pointer to TOPOGRAPHY FIELD FILE (#61) XML Example:<LabTests>    <LabTest>        <Name>HEMATOCRIT - BODY FLUID-KC</Name>        <IEN>1125</IEN>        <Specimen>BODY FLUID,NOS</Specimen>    </LabTest>    <LabTest>        <Name>HCT i-STAT</Name>        <IEN>5742</IEN>        <Specimen>BLOOD</Specimen>    </LabTest>    <LabTest>        <Name>HCT(BLOOD GAS)</Name>        <IEN>2244</IEN>        <Specimen>ARTERIAL BLOOD</Specimen>    </LabTest></LabTests>

Property | Value
--- | ---
Label | LABTEST
Routine | [VBECRPCA](http://code.osehra.org/dox/Routine_VBECRPCA_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 999 | true | The DATA input parameter represents a Lab Test name used to search for potential matches in file 60.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}