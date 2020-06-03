import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  geography: any
  geometry: any
  timestamptz: any
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** Expression to compare the result of casting a column of type geography. Multiple cast targets are combined with logical 'AND'. */
export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>
}

/** expression to compare columns of type geography. All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>
  _eq?: Maybe<Scalars['geography']>
  _gt?: Maybe<Scalars['geography']>
  _gte?: Maybe<Scalars['geography']>
  _in?: Maybe<Array<Scalars['geography']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['geography']>
  _lte?: Maybe<Scalars['geography']>
  _neq?: Maybe<Scalars['geography']>
  _nin?: Maybe<Array<Scalars['geography']>>
  /** is the column within a distance from a geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>
}

/** Expression to compare the result of casting a column of type geometry. Multiple cast targets are combined with logical 'AND'. */
export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>
}

/** expression to compare columns of type geometry. All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>
  _eq?: Maybe<Scalars['geometry']>
  _gt?: Maybe<Scalars['geometry']>
  _gte?: Maybe<Scalars['geometry']>
  _in?: Maybe<Array<Scalars['geometry']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['geometry']>
  _lte?: Maybe<Scalars['geometry']>
  _neq?: Maybe<Scalars['geometry']>
  _nin?: Maybe<Array<Scalars['geometry']>>
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>
  /** does the column crosses the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>
  /** is the column within a distance from a geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>
  /** is the column equal to given geometry value. Directionality is ignored */
  _st_equals?: Maybe<Scalars['geometry']>
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>
}

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'location'
  created_at: Scalars['timestamptz']
  geolocation: Scalars['geography']
  id: Scalars['Int']
  name: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: 'location_aggregate'
  aggregate?: Maybe<Location_Aggregate_Fields>
  nodes: Array<Location>
}

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: 'location_aggregate_fields'
  avg?: Maybe<Location_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Location_Max_Fields>
  min?: Maybe<Location_Min_Fields>
  stddev?: Maybe<Location_Stddev_Fields>
  stddev_pop?: Maybe<Location_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Location_Stddev_Samp_Fields>
  sum?: Maybe<Location_Sum_Fields>
  var_pop?: Maybe<Location_Var_Pop_Fields>
  var_samp?: Maybe<Location_Var_Samp_Fields>
  variance?: Maybe<Location_Variance_Fields>
}

/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Location_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "location" */
export type Location_Aggregate_Order_By = {
  avg?: Maybe<Location_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Location_Max_Order_By>
  min?: Maybe<Location_Min_Order_By>
  stddev?: Maybe<Location_Stddev_Order_By>
  stddev_pop?: Maybe<Location_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Location_Stddev_Samp_Order_By>
  sum?: Maybe<Location_Sum_Order_By>
  var_pop?: Maybe<Location_Var_Pop_Order_By>
  var_samp?: Maybe<Location_Var_Samp_Order_By>
  variance?: Maybe<Location_Variance_Order_By>
}

/** input type for inserting array relation for remote table "location" */
export type Location_Arr_Rel_Insert_Input = {
  data: Array<Location_Insert_Input>
  on_conflict?: Maybe<Location_On_Conflict>
}

/** aggregate avg on columns */
export type Location_Avg_Fields = {
  __typename?: 'location_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "location" */
export type Location_Avg_Order_By = {
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Location_Bool_Exp>>>
  _not?: Maybe<Location_Bool_Exp>
  _or?: Maybe<Array<Maybe<Location_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  geolocation?: Maybe<Geography_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
  /** unique or primary key constraint */
  LocationGeolocationKey = 'location_geolocation_key',
  /** unique or primary key constraint */
  LocationPkey = 'location_pkey'
}

/** input type for incrementing integer column in table "location" */
export type Location_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  geolocation?: Maybe<Scalars['geography']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: 'location_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "location" */
export type Location_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: 'location_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "location" */
export type Location_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
  __typename?: 'location_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Location>
}

/** input type for inserting object relation for remote table "location" */
export type Location_Obj_Rel_Insert_Input = {
  data: Location_Insert_Input
  on_conflict?: Maybe<Location_On_Conflict>
}

/** on conflict condition type for table "location" */
export type Location_On_Conflict = {
  constraint: Location_Constraint
  update_columns: Array<Location_Update_Column>
  where?: Maybe<Location_Bool_Exp>
}

/** ordering options when selecting data from "location" */
export type Location_Order_By = {
  created_at?: Maybe<Order_By>
  geolocation?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "location" */
export type Location_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geolocation = 'geolocation',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  geolocation?: Maybe<Scalars['geography']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Location_Stddev_Fields = {
  __typename?: 'location_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "location" */
export type Location_Stddev_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Location_Stddev_Pop_Fields = {
  __typename?: 'location_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "location" */
export type Location_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Location_Stddev_Samp_Fields = {
  __typename?: 'location_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "location" */
export type Location_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Location_Sum_Fields = {
  __typename?: 'location_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "location" */
export type Location_Sum_Order_By = {
  id?: Maybe<Order_By>
}

/** update columns of table "location" */
export enum Location_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geolocation = 'geolocation',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Location_Var_Pop_Fields = {
  __typename?: 'location_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "location" */
export type Location_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Location_Var_Samp_Fields = {
  __typename?: 'location_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "location" */
export type Location_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Location_Variance_Fields = {
  __typename?: 'location_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "location" */
export type Location_Variance_Order_By = {
  id?: Maybe<Order_By>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "location" */
  delete_location?: Maybe<Location_Mutation_Response>
  /** delete single row from the table: "location" */
  delete_location_by_pk?: Maybe<Location>
  /** insert data into the table: "location" */
  insert_location?: Maybe<Location_Mutation_Response>
  /** insert a single row into the table: "location" */
  insert_location_one?: Maybe<Location>
  /** update data of the table: "location" */
  update_location?: Maybe<Location_Mutation_Response>
  /** update single row of the table: "location" */
  update_location_by_pk?: Maybe<Location>
}

/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
  where: Location_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
  objects: Array<Location_Insert_Input>
  on_conflict?: Maybe<Location_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
  object: Location_Insert_Input
  on_conflict?: Maybe<Location_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
  _inc?: Maybe<Location_Inc_Input>
  _set?: Maybe<Location_Set_Input>
  where: Location_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
  _inc?: Maybe<Location_Inc_Input>
  _set?: Maybe<Location_Set_Input>
  pk_columns: Location_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "location" */
  location: Array<Location>
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>
}

/** query root */
export type Query_RootLocationArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Location_Order_By>>
  where?: Maybe<Location_Bool_Exp>
}

/** query root */
export type Query_RootLocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Location_Order_By>>
  where?: Maybe<Location_Bool_Exp>
}

/** query root */
export type Query_RootLocation_By_PkArgs = {
  id: Scalars['Int']
}

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float']
  from: Scalars['geography']
  use_spheroid?: Maybe<Scalars['Boolean']>
}

export type St_D_Within_Input = {
  distance: Scalars['Float']
  from: Scalars['geometry']
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "location" */
  location: Array<Location>
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>
}

/** subscription root */
export type Subscription_RootLocationArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Location_Order_By>>
  where?: Maybe<Location_Bool_Exp>
}

/** subscription root */
export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Location_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Location_Order_By>>
  where?: Maybe<Location_Bool_Exp>
}

/** subscription root */
export type Subscription_RootLocation_By_PkArgs = {
  id: Scalars['Int']
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

export type LocationMutationVariables = {
  location: Location_Insert_Input
}

export type LocationMutation = { __typename?: 'mutation_root' } & {
  location?: Maybe<
    { __typename?: 'location' } & Pick<
      Location,
      'id' | 'name' | 'geolocation' | 'created_at' | 'updated_at'
    >
  >
}

export type NearbyLocationsQueryVariables = {
  distance: Scalars['Float']
  point: Scalars['geography']
}

export type NearbyLocationsQuery = { __typename?: 'query_root' } & {
  locations: Array<
    { __typename?: 'location' } & Pick<
      Location,
      'id' | 'name' | 'geolocation' | 'created_at' | 'updated_at'
    >
  >
}

export const LocationDocument = gql`
  mutation location($location: location_insert_input!) {
    location: insert_location_one(object: $location) {
      id
      name
      geolocation
      created_at
      updated_at
    }
  }
`
export type LocationMutationFn = ApolloReactCommon.MutationFunction<
  LocationMutation,
  LocationMutationVariables
>

/**
 * __useLocationMutation__
 *
 * To run a mutation, you first call `useLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [locationMutation, { data, loading, error }] = useLocationMutation({
 *   variables: {
 *      location: // value for 'location'
 *   },
 * });
 */
export function useLocationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LocationMutation,
    LocationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    LocationMutation,
    LocationMutationVariables
  >(LocationDocument, baseOptions)
}
export type LocationMutationHookResult = ReturnType<typeof useLocationMutation>
export type LocationMutationResult = ApolloReactCommon.MutationResult<
  LocationMutation
>
export type LocationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LocationMutation,
  LocationMutationVariables
>
export const NearbyLocationsDocument = gql`
  query nearbyLocations($distance: Float!, $point: geography!) {
    locations: location(
      where: {
        geolocation: { _st_d_within: { distance: $distance, from: $point } }
      }
    ) {
      id
      name
      geolocation
      created_at
      updated_at
    }
  }
`

/**
 * __useNearbyLocationsQuery__
 *
 * To run a query within a React component, call `useNearbyLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNearbyLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNearbyLocationsQuery({
 *   variables: {
 *      distance: // value for 'distance'
 *      point: // value for 'point'
 *   },
 * });
 */
export function useNearbyLocationsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    NearbyLocationsQuery,
    NearbyLocationsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    NearbyLocationsQuery,
    NearbyLocationsQueryVariables
  >(NearbyLocationsDocument, baseOptions)
}
export function useNearbyLocationsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    NearbyLocationsQuery,
    NearbyLocationsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    NearbyLocationsQuery,
    NearbyLocationsQueryVariables
  >(NearbyLocationsDocument, baseOptions)
}
export type NearbyLocationsQueryHookResult = ReturnType<
  typeof useNearbyLocationsQuery
>
export type NearbyLocationsLazyQueryHookResult = ReturnType<
  typeof useNearbyLocationsLazyQuery
>
export type NearbyLocationsQueryResult = ApolloReactCommon.QueryResult<
  NearbyLocationsQuery,
  NearbyLocationsQueryVariables
>
