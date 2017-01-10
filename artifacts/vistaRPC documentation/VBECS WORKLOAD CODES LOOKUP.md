---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VBECS WORKLOAD CODES LOOKUP 

 property | value 
--- | --- 
 label | VBECS WORKLOAD CODES LOOKUP
 tag | WKLD
 routine | [VBECRPCW](http://code.osehra.org/dox/Routine_VBECRPCW_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns XML containing a list of Workload Codes from the WKLDCODE file (#64) with a WORKLOAD CODE LAB SECTION of \Blood Bank\ to VBECS. XML Mapping:LMIP element =             WKLD CODE file (#64) / WKLD CODE field (#1)Procedure element =        WKLD CODE file (#64) / PROCEDURE field (#.01)Cost element =             WKLD CODE file (#64) / COST field (#7)WeightMultiplier element = WKLD CODE file (#64) / WKLD UNIT WEIGHT field                            (#2)CPTCode element =          WKLD CODE file (#64) / CODE sub-file (#64.018)                            / CODE field (#.01)  XML Example:<Workload>    <Code>        <LMIP>86272.0000</LMIP>        <Procedure>Cryoprecipitate Thawing</Procedure>        <Cost>2.50</Cost>        <WeightMultiplier>3</WeightMultiplier>        <CPTCode>88399</CPTCode>    </Code>    <Code>        <LMIP>86403.0000</LMIP>        <Procedure>Decontamination of Lymphocyte</Procedure>        <Cost></Cost>        <WeightMultiplier>2</WeightMultiplier>        <CPTCode>88399</CPTCode>    </Code></Workload>