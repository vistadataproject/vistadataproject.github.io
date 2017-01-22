---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB ZIP2CITY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB ZIP2CITY{:/}
 tag | {::nomarkdown}ZIP2CITY{:/}
 routine | [DVBABADR](http://code.osehra.org/dox/Routine_DVBABADR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The remote procedure returns a list containing city, county, and state fora given ZIP code.Results format:  Result(0)=ResultCount_\^\_ErrorMsg                 Result(1..n)=City_\^\_County_\^\_State{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBZIP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ZIP code value in ZIP+4 format.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}