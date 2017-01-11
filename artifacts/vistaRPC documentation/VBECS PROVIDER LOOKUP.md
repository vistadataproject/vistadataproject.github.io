---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VBECS PROVIDER LOOKUP 

 property | value 
--- | --- 
 label | VBECS PROVIDER LOOKUP
 tag | PROVIDER
 routine | [VBECRPCE](http://code.osehra.org/dox/Routine_VBECRPCE_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns XML containing a list of physicians in the NEW PERSON file (#200) that hold the PROVIDER Security Key and do not have a TERMINATION DATE value prior to the current date, and has a matching division from the DIV input parameter whose last name starts with the DATA input parameter. XML Mapping:count attribute =       Number of records foundProviderIEN element =   NEW PERSON file (#200) / NUMBER field (#.001)ProviderName element =  NEW PERSON file (#200) / NAME field (#.01) XML Example:<Providers>    <Record count='5'>        <Provider>            <ProviderIEN>7650</ProviderIEN>            <ProviderName>VBECSprovider,One</ProviderName>        </Provider>        <Provider>            <ProviderIEN>53304</ProviderIEN>            <ProviderName>VBECSprovider,Two</ProviderName>        </Provider>        <Provider>            <ProviderIEN>14909</ProviderIEN>            <ProviderName>VBECSprovider,Three</ProviderName>        </Provider>        <Provider>            <ProviderIEN>8190</ProviderIEN>            <ProviderName>VBECSprovider,Four</ProviderName>        </Provider>        <Provider>            <ProviderIEN>10574</ProviderIEN>            <ProviderName>VBECSprovider,Five</ProviderName>        </Provider>    </Record></Providers>

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DIV | LITERAL | 8 | true | Input DIV = DIVISION (Station Number) | 
| DATA | LITERAL | 99 | true | Input DATA = Name of provider used to perform search in file 200. | 