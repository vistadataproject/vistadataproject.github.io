---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV MULT PARAM 

 property | value 
--- | --- 
 label | DENTV MULT PARAM
 tag | MULT
 routine | [DENTVRX1](http://code.osehra.org/dox/Routine_DENTVRX1_source.html)
 return value type | GLOBAL ARRAY
 description | This will return all instances for a parameter.  The Parameter should be multi-instance.  The difference between this call and the national XPAR call is that this call will return a value for every parameter-instance combination regardless of entity.  It will return the value for the entity of highest precedence.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM | LITERAL | 30 | true | This is the name of the parameter. | 
| FLAG | LITERAL | 4 | true | This flag contains characters that control the information returned.Flag can consists of these four characters, I, i, V, v.  The default value for flag is \iv\.  If flag [ \I\ - return internal instance            \i\ - return external instance            \V\ - return internal value            \v\ - return external value In each array element retruned, the sequence of these values will depend upon the sequence of the character in FLAG. | 
| OTHER | LIST | 40 | true | This list array will allow you send in specific entities. There defaultsfor specific entity types, USR, PKG, and SYS.  USR defaults to th current DUZ.  These can be over-ridden by passing an explicit entity in this OTHER array.  The format of OTHER():  List[sub] := entity   where sub =0,1,2,3,4,...  The entity must be the full explicit entity.  For example:    USR.`12345 to get the defaults for NEW PERSON user whose DUZ is 12345    In this case, USR.`duz will override the default of using the DUZ of    the person who is signed on. This RPC uses the entities from the Parameter Definition file.  For SYS and PKG there should only be one occurrence for each entity-param-instancecombination.  But this is not so for other entity classes, like HOSPTIAL LOCATION, DEVICE, DIVISION, etc.  Therefore for these entity classes you must pass in the full entity syntax in this OTHER array.  The will only be one occurrence of each param-instance combination for each entity class. | 




 ###### Generated on January 11th 2017, 6:39:43 am