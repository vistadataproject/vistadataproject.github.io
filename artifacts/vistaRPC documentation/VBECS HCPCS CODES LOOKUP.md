---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VBECS HCPCS CODES LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VBECS HCPCS CODES LOOKUP{:/}
 tag | {::nomarkdown}HCPCS{:/}
 routine | [VBECRPCH](http://code.osehra.org/dox/Routine_VBECRPCH_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns XML containing a list of active HCPCS codes from the CPTfile with a CPT Category of Pathology and Laboratory Services for use inVBECS. XML Mapping:Code element = CPT file (#81) / CODE field (#.01)Name element = CPT file (#81) / SHORT NAME field (#2) XML Example:<Root>    <HCPCS>        <Code>P2028</Code>        <Name>Cephalin floculation test</Name>    </HCPCS>    <HCPCS>        <Code>P2029</Code>        <Name>Congo red blood test</Name>    </HCPCS>    <HCPCS>        <Code>P2031</Code>        <Name>Hair analysis</Name>    </HCPCS></Root>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}