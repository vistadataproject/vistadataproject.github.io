---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR GET PARAM LIST 

 property | value 
--- | --- 
 label | DSIC XPAR GET PARAM LIST
 tag | LIST
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | ARRAY
 description | This will return a detailed list of one or more Kernel ParameterDefinitions.  It does not return every Param Definition field. Either the NAME input parameter or the PREFIX input parameter is required.  If you pass a NAME then PREFIX is ignored.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NAME | LITERAL | 30 | true | This is the name or the IFN for a Parameter Definition.  Pass this value only if you wish to retrieve the data for one specific Parameter Definition. | 
| PREFIX | LITERAL | 20 | true | This is the namespace or the leading characters for the Parameter Definitions you wished to be returned.  For example, PREFIX=\DSIC\ will return all DSIC Kernel Parameter Definitions. | 