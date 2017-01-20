---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VBECS LABORATORY TEST LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VBECS LABORATORY TEST LOOKUP{:/}
 tag | {::nomarkdown}LABTEST{:/}
 routine | [VBECRPCA](http://code.osehra.org/dox/Routine_VBECRPCA_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns XML containing a list of Laboratory tests from the LABORATORY TEST file (#60). XML Mapping:Name element =          LABORATORY TEST file (#60) / NAME field (#.01)IEN element =           LABORATORY TEST file (#60) / NUMBER field (#.001)Specimen element =      LABORATORY TEST file (#60) / SITE/SPECIMEN                         sub-file (#60.01) / SITE/SPECIMEN field (#.01)                        pointer to TOPOGRAPHY FIELD FILE (#61) XML Example:<LabTests>    <LabTest>        <Name>HEMATOCRIT - BODY FLUID-KC</Name>        <IEN>1125</IEN>        <Specimen>BODY FLUID,NOS</Specimen>    </LabTest>    <LabTest>        <Name>HCT i-STAT</Name>        <IEN>5742</IEN>        <Specimen>BLOOD</Specimen>    </LabTest>    <LabTest>        <Name>HCT(BLOOD GAS)</Name>        <IEN>2244</IEN>        <Specimen>ARTERIAL BLOOD</Specimen>    </LabTest></LabTests>{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The DATA input parameter represents a Lab Test name used to search for potential matches in file 60.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}