---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV MULT PARAM
# DENTV MULT PARAM

This will return all instances for a parameter.  The Parameter should be multi-instance.  The difference between this call and the national XPAR call is that this call will return a value for every parameter-instance combination regardless of entity.  It will return the value for the entity of highest precedence.

Property | Value
--- | ---
Label | MULT
Routine | [DENTVRX1](http://code.osehra.org/dox/Routine_DENTVRX1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LITERAL | 30 | true | This is the name of the parameter.
FLAG | LITERAL | 4 | true | This flag contains characters that control the information returned.Flag can consists of these four characters, I, i, V, v.  The default value for flag is &quot;iv&quot;.  If flag [ &quot;I&quot; - return internal instance            &quot;i&quot; - return external instance            &quot;V&quot; - return internal value            &quot;v&quot; - return external value In each array element retruned, the sequence of these values will depend upon the sequence of the character in FLAG.
OTHER | LIST | 40 | true | This list array will allow you send in specific entities. There defaultsfor specific entity types, USR, PKG, and SYS.  USR defaults to th current DUZ.  These can be over-ridden by passing an explicit entity in this OTHER array.  The format of OTHER():  List[sub] :&#x3D; entity   where sub &#x3D;0,1,2,3,4,...  The entity must be the full explicit entity.  For example:    USR.&#x60;12345 to get the defaults for NEW PERSON user whose DUZ is 12345    In this case, USR.&#x60;duz will override the default of using the DUZ of    the person who is signed on. This RPC uses the entities from the Parameter Definition file.  For SYS and PKG there should only be one occurrence for each entity-param-instancecombination.  But this is not so for other entity classes, like HOSPTIAL LOCATION, DEVICE, DIVISION, etc.  Therefore for these entity classes you must pass in the full entity syntax in this OTHER array.  The will only be one occurrence of each param-instance combination for each entity class.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}