---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VBECS ACCESSION AREA LOOKUP 

 property | value 
--- | --- 
 label | {::nomarkdown}VBECS ACCESSION AREA LOOKUP{:/}
 tag | {::nomarkdown}ACNAREA{:/}
 routine | [VBECRPCM](http://code.osehra.org/dox/Routine_VBECRPCM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns XML containing a list of Lab Blood Bank Accession Areasfrom the ACCESSION file (#68) where the LR SUBSCRIPT field .02 is set toBLOOD BANK for use in the gov.va.med.vbecs rehosted Blood Bankapplication. XML Mapping:AccessionAreaName element = ACCESSION file (#68) / ACCESSION AREA field (#.01)AccessionAreaId element =   ACCESSION file (#68) / IEN field (#.001) XML Example:<AccessionAreas>    <AccessionArea>        <AccessionAreaName>BLOOD BANK</AccessionAreaName>        <AccessionAreaId>29</AccessionAreaId>    </AccessionArea>    <AccessionArea>        <AccessionAreaName>COBLOOD BANK</AccessionAreaName>        <AccessionAreaId>60</AccessionAreaId>    </AccessionArea>    <AccessionArea>        <AccessionAreaName>LEBLOOD BANK</AccessionAreaName>        <AccessionAreaId>87</AccessionAreaId>    </AccessionArea>    <AccessionArea>        <AccessionAreaName>TOBLOOD BANK</AccessionAreaName>        <AccessionAreaId>91</AccessionAreaId>    </AccessionArea>    <AccessionArea>        <AccessionAreaName>WIBLOOD BANK</AccessionAreaName>        <AccessionAreaId>146</AccessionAreaId>    </AccessionArea></AccessionAreas>{:/}




 Generated on January 13th 2017, 7:15:28 am