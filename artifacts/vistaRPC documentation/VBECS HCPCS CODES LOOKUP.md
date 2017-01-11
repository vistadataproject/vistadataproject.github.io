---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VBECS HCPCS CODES LOOKUP 

 property | value 
--- | --- 
 label | VBECS HCPCS CODES LOOKUP
 tag | HCPCS
 routine | [VBECRPCH](http://code.osehra.org/dox/Routine_VBECRPCH_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns XML containing a list of active HCPCS codes from the CPTfile with a CPT Category of Pathology and Laboratory Services for use inVBECS. XML Mapping:Code element = CPT file (#81) / CODE field (#.01)Name element = CPT file (#81) / SHORT NAME field (#2) XML Example:<Root>    <HCPCS>        <Code>P2028</Code>        <Name>Cephalin floculation test</Name>    </HCPCS>    <HCPCS>        <Code>P2029</Code>        <Name>Congo red blood test</Name>    </HCPCS>    <HCPCS>        <Code>P2031</Code>        <Name>Hair analysis</Name>    </HCPCS></Root>




Generated on January 11th 2017, 6:34:23 am