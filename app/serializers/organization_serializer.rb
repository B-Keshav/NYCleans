class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :description, :non_profit
end
