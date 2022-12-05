# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_05_201846) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "jobs", force: :cascade do |t|
    t.bigint "location_id", null: false
    t.string "desciption"
    t.string "job_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_jobs_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.float "lng"
    t.float "lat"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "description"
    t.boolean "non_profit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "password_digest"
    t.string "bio"
    t.bigint "organization_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_users_on_organization_id"
  end

  create_table "volunteers", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "job_id", null: false
    t.boolean "is_organizer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_volunteers_on_job_id"
    t.index ["user_id"], name: "index_volunteers_on_user_id"
  end

  add_foreign_key "jobs", "locations"
  add_foreign_key "users", "organizations"
  add_foreign_key "volunteers", "jobs"
  add_foreign_key "volunteers", "users"
end
