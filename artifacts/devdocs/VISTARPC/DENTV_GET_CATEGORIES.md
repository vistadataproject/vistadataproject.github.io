---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV GET CATEGORIES<br/>
# DENTV GET CATEGORIES

This rpc will return the different categories (fields 5 & 6) in file 228

## Properties

Property | Value
--- | ---
Label | CAT
MUMPS Implementation | [DENTVRP1](http://code.osehra.org/dox/Routine_DENTVRP1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYP | LITERAL | 30 | true | This is optional.  If passed it should be either 1, 2, or 12If it is not passed, then this call will default to 12 For file 228,  If TYP&#x3D;1, then only return the subcategory-1 names (field 5)  If TYP&#x3D;2, then only return the subcategory-2 names (field 6)  If TYP&#x3D;12, then return both subcategories&#x27; names



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}