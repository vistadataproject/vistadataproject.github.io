---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBD GET ONE INPUT OBJECT 

 property | value 
--- | --- 
 label | IBD GET ONE INPUT OBJECT
 tag | OBJLST
 routine | [IBDFRPC1](http://code.osehra.org/dox/Routine_IBDFRPC1_source.html)
 return value type | ARRAY
 description | This call will return specific information about any one input objectregardless of type.  Developers should first use the RPC to return theavailable input objects (either by form or by clinic).   There are 3 types of input objects, lists (both static and dynamic),hand print fields, and multiple choice fields.  Each input objectmay be associated with selection rules and data qualifiers.  Thereare 4 selection rules:    0 := any number (including zero)   1 := exactly one   2 := at most one (0 or 1)   3 := at least one (1 or more) There are also a number of data qualifiers that are used to describe thedata, for example, primary, secondary, add to problem list, etc.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IBDF | LIST |  | true | The following variables are required:   IBDF(\PI\)     := pointer to the package interface file   IBDF(\IEN\)    := pointer to the input object (file depends on type)   IBDF(\CLINIC\) := pointer to the hospital location file (required only                     to return provider lists)   IBDF(\DFN\)    := pointer to patient file (required only for patient                     specific dynamic lists such as patient active problems)All are returned by one of the available rpc's in aics. | 