---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VBECS LABORATORY TEST LOOKUP<br/>
# VBECS LABORATORY TEST LOOKUP

This RPC returns XML containing a list of Laboratory tests from the LABORATORY TEST file (#60). XML Mapping:Name element =          LABORATORY TEST file (#60) / NAME field (#.01)IEN element =           LABORATORY TEST file (#60) / NUMBER field (#.001)Specimen element =      LABORATORY TEST file (#60) / SITE/SPECIMEN                         sub-file (#60.01) / SITE/SPECIMEN field (#.01)                        pointer to TOPOGRAPHY FIELD FILE (#61) XML Example:<LabTests>    <LabTest>        <Name>HEMATOCRIT - BODY FLUID-KC</Name>        <IEN>1125</IEN>        <Specimen>BODY FLUID,NOS</Specimen>    </LabTest>    <LabTest>        <Name>HCT i-STAT</Name>        <IEN>5742</IEN>        <Specimen>BLOOD</Specimen>    </LabTest>    <LabTest>        <Name>HCT(BLOOD GAS)</Name>        <IEN>2244</IEN>        <Specimen>ARTERIAL BLOOD</Specimen>    </LabTest></LabTests>

## Properties

Property | Value
--- | ---
Label | LABTEST
Routine | [VBECRPCA](http://code.osehra.org/dox/Routine_VBECRPCA_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 999 | true | The DATA input parameter represents a Lab Test name used to search for potential matches in file 60.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}