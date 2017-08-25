---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV GET CATEG CODES<br/>
# DENTV GET CATEG CODES

This works in conjunction with the DENTV GET CATEGORIES rpc.  You passthe subcategory name and this call will return the array of cpt codesassociated with that subcategory name. end description update 6-23-2003

## Properties

Property | Value
--- | ---
Label | CATC
MUMPS Implementation | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYP | LITERAL | 30 | true | This is the subcategory name from file 228 that was retrieved by usingthe DENTV GET CATEGORIES rpc.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}