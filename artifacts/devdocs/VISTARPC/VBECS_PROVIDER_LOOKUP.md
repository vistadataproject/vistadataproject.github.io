---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VBECS PROVIDER LOOKUP<br/>
# VBECS PROVIDER LOOKUP

This RPC returns XML containing a list of physicians in the NEW PERSON file (#200) that hold the PROVIDER Security Key and do not have a TERMINATION DATE value prior to the current date, and has a matching division from the DIV input parameter whose last name starts with the DATA input parameter. XML Mapping:count attribute =       Number of records foundProviderIEN element =   NEW PERSON file (#200) / NUMBER field (#.001)ProviderName element =  NEW PERSON file (#200) / NAME field (#.01) XML Example:<Providers>    <Record count='5'>        <Provider>            <ProviderIEN>7650</ProviderIEN>            <ProviderName>VBECSprovider,One</ProviderName>        </Provider>        <Provider>            <ProviderIEN>53304</ProviderIEN>            <ProviderName>VBECSprovider,Two</ProviderName>        </Provider>        <Provider>            <ProviderIEN>14909</ProviderIEN>            <ProviderName>VBECSprovider,Three</ProviderName>        </Provider>        <Provider>            <ProviderIEN>8190</ProviderIEN>            <ProviderName>VBECSprovider,Four</ProviderName>        </Provider>        <Provider>            <ProviderIEN>10574</ProviderIEN>            <ProviderName>VBECSprovider,Five</ProviderName>        </Provider>    </Record></Providers>

## Properties

Property | Value
--- | ---
Label | PROVIDER
MUMPS Implementation | [VBECRPCE](http://code.osehra.org/dox/Routine_VBECRPCE_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIV | LITERAL | 8 | true | Input DIV &#x3D; DIVISION (Station Number)
DATA | LITERAL | 99 | true | Input DATA &#x3D; Name of provider used to perform search in file 200.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}