---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VBECS HCPCS CODES LOOKUP<br/>
# VBECS HCPCS CODES LOOKUP

This RPC returns XML containing a list of active HCPCS codes from the CPTfile with a CPT Category of Pathology and Laboratory Services for use inVBECS. XML Mapping:Code element = CPT file (#81) / CODE field (#.01)Name element = CPT file (#81) / SHORT NAME field (#2) XML Example:<Root>    <HCPCS>        <Code>P2028</Code>        <Name>Cephalin floculation test</Name>    </HCPCS>    <HCPCS>        <Code>P2029</Code>        <Name>Congo red blood test</Name>    </HCPCS>    <HCPCS>        <Code>P2031</Code>        <Name>Hair analysis</Name>    </HCPCS></Root>

## Properties

Property | Value
--- | ---
Label | HCPCS
MUMPS Implementation | [VBECRPCH](http://code.osehra.org/dox/Routine_VBECRPCH_source.html)
Return Type | GLOBAL ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}